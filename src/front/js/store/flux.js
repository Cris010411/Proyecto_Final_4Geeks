const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			navState: "externa",
			permitir: false
		},
		actions: {
			getUser: (email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-amethyst-cheetah-uh3ssc4w.ws-us04.gitpod.io/api/login", requestOptions)
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							return response.json();
						} else {
							alert("error" + response.status);
						}
					})
					.then(result => {
						alert(result.token);
						setStore({ permitir: true });
					})
					.catch(error => console.log("error", error));
			},

			changeNav: index => {
				setStore({ navState: index });
			}
		}
	};
};

export default getState;
