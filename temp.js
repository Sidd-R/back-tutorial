const x = document.getElementById("ab")

axios.get('http://localhost:5678/abc', "vivek")
.then((res) => x.innerHTML = res.data)

// axios.post('http://localhost:5678',{name:"vivek"}).then(res => x.innerHTML= res.data)