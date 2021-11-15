export default class ColorTool
{
    /**
     * @param {string} hexString
     * @return {number}
     */
    static stringToNumber(hexString)
    {return Number(hexString.replace('#', '0x'));}

    /**
     * @param {number} number
     * @return {string}
     */
    static numberToString(number)
    {return '#' + number.toString(16);}
}
