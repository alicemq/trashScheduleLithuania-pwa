import axios from 'axios'

const API_BASE_URL = 'https://grafikai.svara.lt/api'

export default {
  /**
   * Get streets based on search query and municipality
   * @param {string} municipality - Municipality name
   * @param {string} subDistrict - Subdistrict name
   * @param {string} city - City name
   * @param {string} query - Street search query
   * @returns {Promise<string[]>} - List of street names
   */
  async getStreets(municipality, subDistrict, city, query) {
    try {
      const encodedQuery = encodeURIComponent(query)
      const encodedMunicipality = encodeURIComponent(municipality)
      const encodedSubDistrict = encodeURIComponent(subDistrict || '')
      const encodedCity = encodeURIComponent(city || '')

      const response = await axios.get(
        `${API_BASE_URL}/address/streets?district=${encodedMunicipality}&subDistrict=${encodedSubDistrict}&city=${encodedCity}&address=${encodedQuery}`
      )

      return response.data
    } catch (error) {
      console.error('API Error: getStreets', error)
      throw error
    }
  },

  /**
   * Get trash bins contracts for the specified address
   * @param {Object} params - Address parameters
   * @returns {Promise<Array>} - List of trash bin contracts
   */
  async getTrashBins(params) {
    try {
      const queryParams = new URLSearchParams({
        pageSize: '10',
        pageIndex: '0',
        address: params.street,
        region: params.municipality,
        houseNumber: params.houseNumber,
        subDistrict: params.subDistrict || '',
        city: params.city || '',
        matchHouseNumber: 'true' // Always set to true to ensure exact matches
      })

      const response = await axios.get(`${API_BASE_URL}/contracts?${queryParams}`)
      return response.data
    } catch (error) {
      console.error('API Error: getTrashBins', error)
      throw error
    }
  },

  /**
   * Get collection schedules for a specific address using contracts endpoint
   */
  async getCollections(params) {
    try {
      const queryParams = new URLSearchParams({
        pageSize: '100',
        pageIndex: '0',
        address: params.street,
        region: params.municipality,
        houseNumber: params.houseNumber,
        subDistrict: params.subDistrict || '',
        city: params.city || '',
        matchHouseNumber: 'true'
      })

      const response = await axios.get(`${API_BASE_URL}/contracts?${queryParams}`)
      return response.data.data || []
    } catch (error) {
      console.error('API Error: getCollections', error)
      throw error
    }
  },

  /**
   * Get schedule dates for a specific waste object
   */
  async getSchedule(wasteObjectId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/schedule?wasteObjectId=${wasteObjectId}`)
      return response.data
    } catch (error) {
      console.error('API Error: getSchedule', error)
      throw error
    }
  },

  async getSubDistricts(municipality) {
    try {
      const encodedMunicipality = encodeURIComponent(municipality)
      const response = await axios.get(
        `${API_BASE_URL}/address/subdistricts?region=${encodedMunicipality}`
      )
      return response.data
    } catch (error) {
      console.error('API Error: getSubDistricts', error)
      throw error
    }
  },

  async getCities(municipality, subDistrict) {
    try {
      const encodedMunicipality = encodeURIComponent(municipality)
      const encodedSubDistrict = encodeURIComponent(subDistrict || '')
      const response = await axios.get(
        `${API_BASE_URL}/address/subdistricts?region=${encodedMunicipality}&subDistrict=${encodedSubDistrict}`
      )
      return response.data
    } catch (error) {
      console.error('API Error: getCities', error)
      throw error
    }
  }
}
