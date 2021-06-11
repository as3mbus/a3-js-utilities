export * from "./string_formatting"
export * from "./time_string_conversion"
export * from "./response_code"

/**
 * @param {Array} array
 * @return Array
 */
export function fisherYatesShuffle(array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

/**
 * @param {Object} prop - property that name want to be taken
 * @param {any} value - object containing the property
 * @return {string | null} - property name
 */
export function propName(prop, value)
{
    for (const i in prop)
        if (prop.hasOwnProperty(i) && prop[i] === value)
            return i;
    return null;
}

export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
