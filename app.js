'use strict';
const axios = require('axios');
axios.get('https://chokkanteki.com').then(res => {
    console.log(res.data);
});