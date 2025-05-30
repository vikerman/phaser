/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Converts a hue to an RGB color.
 * Based on code by Michael Jackson (https://github.com/mjijackson)
 *
 * @function Phaser.Display.Color.HueToComponent
 * @since 3.0.0
 *
 * @param {number} p
 * @param {number} q
 * @param {number} t
 *
 * @return {number} The combined color value.
 */
var HueToComponent = function (p, q, t)
{
    if (t < 0)
    {
        t += 1;
    }

    if (t > 1)
    {
        t -= 1;
    }

    if (t < 1 / 6)
    {
        return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2)
    {
        return q;
    }

    if (t < 2 / 3)
    {
        return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
};

module.exports = HueToComponent;
