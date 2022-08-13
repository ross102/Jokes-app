import axios from 'axios';



export default axios.create({
	baseURL: "https://api.chucknorris.io",
	timeout: 40000
});	