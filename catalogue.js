class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(value) {
      if(value.isNaN()){  
        console.log('Invalid input: numberOfStudents must be set to a Number');
      } else {
        this._numberOfStudents = value;
      }
    }
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
  
    static 
    pickSubstituteTeacher(substituteTeachers) {
      const randInt = Math.floor(Math.random() * substituteTeachers.length);
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
      super(name, 'primary', numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
      }
  
      get pickUpPolicy() {
        return this._pickUpPolicy;
      }
    }
  
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
  
   get sportsTeams() {
        return this._sportsTeams;
      }
  }

  class college extends School {
    constructor(name, numberOfStudents, clubMembers) {
      super(name, 'college', numberOfStudents);
      this._clubMembers = clubMembers;
    }  

    get clubMembers() {
      return this._clubMembers;
    }
  }
  
  const brilliaceAcademy = new PrimarySchool('Brilliance Academy', 514, 'Parents or Guardians are kindly requested to pick their children under the age of 13yrs.');
  
  brilliaceAcademy.quickFacts();
  
  const londonInnBee = new HighSchool ('London Inn Bee', 1015, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field', 'High Jump', 'Juveline']);
  londonInnBee.quickFacts();

  const mastersTrainingCollege = new college ('Masters Training College', 8000, ['Tai', 'James', 'Mark', 'Mathew', 'Jimmy Rodry', 'Aggie Marrie', 'Tammy']);
  mastersTrainingCollege.quickFacts();

  const sub = School.pickSubstituteTeacher(['Jacob Tai', 'Luke mod', 'Jones Tum', 'James Reece', 'Jason Jerry', 'Manu Githonga']);

  console.log(brilliaceAcademy.pickUpPolicy);
  console.log(londonInnBee.sportsTeams);
  console.log(mastersTrainingCollege.clubMembers); 
  
  
   
   