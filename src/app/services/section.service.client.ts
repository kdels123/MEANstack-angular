export class SectionServiceClient {
  SECTION_URL = 'https://cs5610-nodejs-kdelsener.herokuapp.com/api/course/COURSEID/section';

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'POST',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    const url = 'https://cs5610-nodejs-kdelsener.herokuapp.com/api/section/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  updateSection(name, seats, sectionId) {
    const section = {sectionId, name, seats};
    const url = 'https://cs5610-nodejs-kdelsener.herokuapp.com/api/section/' + sectionId;
    console.log(section);
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  enrollStudentInSection(sectionId) {
    const url = 'https://cs5610-nodejs-kdelsener.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unenrollStudentInSection(enrollment) {
    console.log(enrollment._id);
    const url = 'https://cs5610-nodejs-kdelsener.herokuapp.com/api/enrollment/' + enrollment._id;
    return fetch(url, {
      method: 'delete',
      body: JSON.stringify(enrollment),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findSectionsForStudent() {
    const url = 'https://cs5610-nodejs-kdelsener.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }


}
