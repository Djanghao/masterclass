# JavaScript recursive, easy to understand solution

**Author:** RamanH
**Votes:** 14
**Link:** [https://leetcode.com/problems/reformat-phone-number/solutions/982609/](https://leetcode.com/problems/reformat-phone-number/solutions/982609/)

---

```
var reformatNumber = function (number) {

    // recursive function to add dashes, needs a string without dashes as input
    var recursiveReformatNumber = function(number) {

        if (number.length <= 3){
            return number;
        }
        // if length of the string is 4, splt it in two, separated by a dash
        if (number.length == 4){
            return number.substring(0,2) + "-" + number.substring(2,4);
        }
        // take the first three digits add a dash then start the function over with the rest
        else {
            return number.substring(0,3) + "-" + recursiveReformatNumber(number.substring(3, number.length));
        }
    };

    // remove all non-numbers (dashes, and spaces)
    return recursiveReformatNumber(number.replace(/\\D/g, ""));

}
```
