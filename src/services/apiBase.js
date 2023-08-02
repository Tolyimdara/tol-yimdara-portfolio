import axios from 'axios';
    const baseUrl = 'http://localhost:8081/api/projects';
    // export default url = 'http://localhost:8081/';
    /* 
     *  Fetch list of the top 50 stories
     *  returns stories[].
    */
    export function getAllProjects() {
        let projects = [];
        const response =  axios.get(`${baseUrl}`);
        projects = response;
        return projects;
    }
    export function getSingleProject(projectId) {
        let projects = {};
        const response =  axios.get(`${baseUrl+'/'+projectId}`);
        projects = response;
        return projects;
    }
    