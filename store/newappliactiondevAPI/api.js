import axios from "axios"
const newappliactiondevAPI = axios.create({
  baseURL: "https://newappliaction-dev-88706.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_data_list(payload) {
  return newappliactiondevAPI.get(`/api/v1/data/`)
}
function api_v1_data_create(payload) {
  return newappliactiondevAPI.post(`/api/v1/data/`, payload.data)
}
function api_v1_login_create(payload) {
  return newappliactiondevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return newappliactiondevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return newappliactiondevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return newappliactiondevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return newappliactiondevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return newappliactiondevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return newappliactiondevAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_data_retrieve(payload) {
  return newappliactiondevAPI.get(`/api/v1/data/${payload.id}/`)
}
function api_v1_data_update(payload) {
  return newappliactiondevAPI.put(`/api/v1/data/${payload.id}/`, payload.data)
}
function api_v1_data_partial_update(payload) {
  return newappliactiondevAPI.patch(`/api/v1/data/${payload.id}/`, payload.data)
}
function api_v1_data_destroy(payload) {
  return newappliactiondevAPI.delete(`/api/v1/data/${payload.id}/`)
}
function rest_auth_logout_retrieve(payload) {
  return newappliactiondevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return newappliactiondevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_registration_create(payload) {
  return newappliactiondevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return newappliactiondevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return newappliactiondevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return newappliactiondevAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return newappliactiondevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_data_list,
  api_v1_data_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_data_retrieve,
  api_v1_data_update,
  api_v1_data_partial_update,
  api_v1_data_destroy,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
