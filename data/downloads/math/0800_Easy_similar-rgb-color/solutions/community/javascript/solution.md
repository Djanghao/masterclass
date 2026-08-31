# javascript answer with comments

**Author:** xeiyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/2705806/](https://leetcode.com/problems/similar-rgb-color/solutions/2705806/)

---

```js
/**
 * @param {string} color
 * @return {string}
 */
var similarRGB = function(color) {
    // since we only consider values like #000000 #001122 #112233 ...
    // enumerate all the possible components for composing the answer.
    const components = [
        0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 
        0x88, 0x99, 0xaa, 0xbb, 0xcc , 0xdd, 0xee, 0xff
    ]
    // parse the input color into rgb decimal values
    const rgb = [
        parseInt(color.slice(1,3), 16),
        parseInt(color.slice(3,5), 16),
        parseInt(color.slice(5,7), 16),
    ]

    const ans = [0, 0, 0]
    const diff = [-Infinity, -Infinity, -Infinity]
    
    // based on the eqation, we know that R, G, B has the same weight.
    // that means the answer would be a color that has minimun diff on
    // all the RGB components.
    components.forEach(num => {
        // try to compare all the components with color's RR, GG, BB
        rgb.forEach((val, i) => {
            const d = -Math.pow(num - val, 2)
            // if the component and input color's RR/GG/BB is smaller than 
            // the one we've found so far, update the answer array
            if(d > diff[i]) {
                // update the color component of specific color
                // be sure to pad 0 when the value is 0
                ans[i] = Number(num).toString(16).padStart(2, '0')
                diff[i] = d
            }
        })        
    })
    
    return '#' + ans.join('')
};
```