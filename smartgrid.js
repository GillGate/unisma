const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1300px',
        fields: '65px'
    },
    breakPoints: {
        lg: {
            width: "1350px",
            fields: "35px"
        },
        md: {
            width: "1024px",
            // fields: "15px"
        },
        sm: {
            width: "720px",
            // fields: "10px"
        },
        xs: {
            width: "576px",
            // fields: "5px"
        }
    },
    oldSizeStyle: false
};

smartgrid('./src/less', settings);