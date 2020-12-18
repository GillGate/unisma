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
            width: "1024px"
        },
        sm: {
            width: "745px",
            fields: "15px"
        },
        xs: {
            width: "576px"
        }
    },
    oldSizeStyle: false
};

smartgrid('./src/less', settings);