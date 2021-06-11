export function indonesianDay(index)
{
    if(index > 7)throw Error('Argument Out Of Bound : invalid index (valid index : 0 ~ 6) ')
    switch (index % 7)
    {
        case 0: case 7:
            return 'Minggu'
        case 1:
            return 'Senin'
        case 2:
            return 'Selasa'
        case 3:
            return 'Rabu'
        case 4:
            return 'Kamis'
        case 5:
            return 'Jumat'
        case 6:
            return 'Sabtu'
    }
}

/**
 * @param {number} number
 * @return {string}
 */
export function formatRankNumber(number)
{
    let suffix;
    switch (number)
    {
        case 1 :
            suffix = "st";
            break;
        case 2 :
            suffix = "nd";
            break;
        case 3 :
            suffix = "rd";
            break;
        default :
            suffix = "th";
    }
    return number + ' ' + suffix
}


/**
 * format string to given length. when string is more than given length it will cut to the length and add `...` three dots behind it
 * @param {string} string - string to format
 * @param {number} length - maximum length of the text
 * @return {string} - formatted string
 */
export function lengthFormatting(string, length)
{
    return string.length <= length
        ? string
        : replaceEOLWith3Dots(string.substring(0, length))
}

/**
 * @param {string} string
 * @return {string}
 */
export function replaceEOLWith3Dots(string)
{return string.substring(0, string.length - 3) + "..."}
