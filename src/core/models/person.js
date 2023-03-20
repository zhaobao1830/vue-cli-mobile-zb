import apiServiceConfig from '@/core/config/apiService'
import { get, post } from '@/core/models/axios'

export default class Person {
  static async register({
    username,
    password,
    confirmPassword
  }) {
    return post(apiServiceConfig.register, {
      username,
      password,
      confirmPassword
    })
  }

  static async userList({
    username,
    password
  }) {
    return get(apiServiceConfig.list, {
      username,
      password
    })
  }
}
