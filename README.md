# Recommendations-service

Recommendations service component includes:
- Front-end city search bar (auto-suggestions)
- Image carousel of recommendations
- Modal pop-up to save favorites
- Static footnotes

<a href="https://imgflip.com/gif/2yiis2"><img src="https://i.imgflip.com/2yiis2.gif" title="made at imgflip.com"/></a>

# Getting Started:

- `npm install` all packages

- run `npm build`
If deploying on AWS server make sure to change axios request in `ComponentDidMount` in App.jsx (client/components/App.jsx)

from: 
`axios.get(`/room${window.location.pathname}`) `

to:
`axios.get(`http://[Insert AWS EC2 public DNS]/room${window.location.pathname}`) `

### ex:
`axios.get(`http://ec2-54-90-97-213.compute-1.amazonaws.com/room${window.location.pathname}`)`

- Setup port forwarding to port 3001
`sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3001`

- run `npm start`

## Build with: 
- React 
- Node.js
- Express
- MySQL
- Redis
- NGINX
