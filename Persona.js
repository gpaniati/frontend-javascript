class Persona {
  name;
  surname;
  sex;

  constructor(name, surname, sex) {
    this.name = name;
    this.surname = surname;
    this.sex = sex;
  }

  fullName() {
    return this.name + " " + this.surname;
  }

  isMale() {
    return this.sex === "male";
  }

  isFemale() {
    return this.sex === "female";
  }

  toString() {
    return this.fullName();
  }
}

const personas = [];
