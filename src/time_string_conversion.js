
/**
 * @param {number} s - time in ms
 * @return {string} - format HH:MM:SS:sss
 */
export function msToTime(s)
{
    const pad = (n, z = 2) => ('00' + n).slice(-z);
    return pad(s / 3.6e6 | 0) + ':' + pad((s % 3.6e6) / 6e4 | 0) + ':' + pad((s % 6e4) / 1000 | 0) + '.' + pad(s % 1000, 3);
}

/**
 * @param {string} timeString - time in string with format HH:MM:SS
 * @return {number}
 */
export function timeToSecond(timeString)
{
    const a = timeString.split(':'); // split it at the colons
    return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
}

