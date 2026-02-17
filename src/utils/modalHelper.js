/**
 * Helper function to show Bootstrap modal from Vue component
 * @param {string} modalId - The ID of the modal element
 * @returns {Bootstrap.Modal} - The Bootstrap modal instance
 */
export function showModal(modalId) {
  const modalElement = document.getElementById(modalId)
  if (!modalElement) {
    console.error(`Modal element with id ${modalId} not found`)
    return null
  }

  const bootstrapModal = new window.bootstrap.Modal(modalElement)
  bootstrapModal.show()
  return bootstrapModal
}

/**
 * Helper function to hide Bootstrap modal
 * @param {string} modalId - The ID of the modal element
 */
export function hideModal(modalId) {
  const modalElement = document.getElementById(modalId)
  if (!modalElement) {
    console.error(`Modal element with id ${modalId} not found`)
    return
  }

  const bootstrapModal = window.bootstrap.Modal.getInstance(modalElement)
  if (bootstrapModal) {
    bootstrapModal.hide()
  }
}
