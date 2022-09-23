var config = {
    preButton: {
        _comment: "pre image",
        type: "button",
    },
    nextButton: {
        _comment: "next image",
        type: "button",
    },
    centerButton: {
        _comment: "center image",
        type: "button",
    },
    penClearButton: {
        _comment: "pen clear",
        type: "button",
    },
    index: {
        _comment: "image index",
        value: 0,
        valueType: 'number',
        min: 0,
        max: 30,
        type: "range",
    },
    offset: {
        _comment: "canvas offset",
        value: 6,
        valueType: 'number',
        min: 2,
        max: 30,
        type: "range",
    },
    imageOffset: {
        _comment: "image offset",
        value: 60,
        valueType: 'number',
        min: -100,
        max: 100,
        type: "range",
    },
    shadowOffset: {
        _comment: "shadow offset",
        value: 10,
        valueType: 'number',
        min: -50,
        max: 50,
        type: "range",
    },
    shadowBlur: {
        _comment: "shadow blur level",
        value: 14,
        valueType: 'number',
        min: 0,
        max: 30,
        type: "range",
    },
    shadowColorAlpha: {
        _comment: "shadow color alpha",
        value: 5,
        valueType: 'number',
        min: 0,
        max: 10,
        type: "range",
    },
    shadowColor: {
        _comment: "shadow color",
        value: '#000000',
        valueType: 'string',
        type: "color",
    },
    borderLength: {
        _comment: "border length:",
        value: 2.5,
        valueType: 'number',
        min: 0,
        max: 30,
        type: "range",
    },
    borderColor: {
        _comment: "border color",
        value: '#000000',
        valueType: 'string',
        type: "color",
    },
    penEnabled: {
        _comment: "pen enabled",
        value: 'false',
        valueType: 'boolean',
        type: "checkbox",
    },
    penWeight: {
        _comment: "pen weight:",
        value: 2,
        valueType: 'number',
        min: 0,
        max: 10,
        type: "range",
    },
    penColor: {
        _comment: "pen color",
        value: "#000000",
        valueType: "string",
        type: "color",
    },
    textInputEnabled: {
        _comment: "text input enabled",
        value: 'false',
        valueType: 'boolean',
        type: "checkbox",
    },
    textFont: {
        _comment: "text font",
        value: "20px Arial",
        valueType: "string",
        type: "text",
    },
    textColor: {
        _comment: "text font color",
        value: "#000000",
        valueType: "string",
        type: "color",
    },
    shapeEnabled: {
        _comment: "shape enabled",
        value: 'false',
        valueType: 'boolean',
        type: "checkbox",
    },
    shapeSelect: {
        _comment: "shape select",
        value: 'rect',
        valueType: 'string',
        type: "text",
        list: {
            name: "shape_list",
            options: [
                'rect', 
                'arrow',
                // 'circle',
            ],
        }
    },
    shapeColor: {
        _comment: "shape color",
        value: "#000000",
        valueType: "string",
        type: "color",
    },
    shapeBorder: {
        _comment: "shape border",
        value: 3,
        valueType: 'number',
        min: 3,
        max: 20,
        type: "range",
    }
}
