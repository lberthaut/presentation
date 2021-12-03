

export default class Usefetch {
    static async getUser() {
      return fetch("datas.json")
        .then((result) => result.json())
        .then((data) => {
          return data.MAIN_DATAS;
        });
    }

    static async getProfessionnalXp() {
        return fetch("datas.json")
          .then((result) => result.json())
          .then((data) => {
            return data.PROFESSIONNAL_EXP;
          });
      }

      static async getScolarPath() {
        return fetch("datas.json")
          .then((result) => result.json())
          .then((data) => {
            return data.SCOLAR_PATH;
          });
      }

      static async getHobbies() {
        return fetch("datas.json")
          .then((result) => result.json())
          .then((data) => {
            return data.HOBBIES;
          });
      }
}