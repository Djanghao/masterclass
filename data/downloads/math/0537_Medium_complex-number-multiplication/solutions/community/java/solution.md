# Easy to understand regex explanation with solution

**Author:** Shashaa35
**Votes:** 4
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/1423766/](https://leetcode.com/problems/complex-number-multiplication/solutions/1423766/)

---

The regex which is the core of this solution is 
```
String x[] = a.split("\\\\+|i");
int a_real = Integer.parseInt(x[0]);
int a_img  = Integer.parseInt(x[1]);
```
**Regex Explanation:**

***Why `\\\\+`?***
`+` aka plus is a metacharacter. Metacharacters in Java regular expressions have a special meaning. If you really want to match these characters in their literal form, and not their metacharacter meaning, you must "escape" the metacharacer you want to match. To escape a metacharacter you use the Java regular expression escape character - the backslash character. Escaping a character means preceding it with the backslash character. For instance, like this:
`\\+`
In this example the `+` character is preceded (escaped) by the \\ character. When escaped the plus character will actually match a plus character in the input text. The special metacharacter meaning of an escaped metacharacter is ignored - only its actual literal value (e.g. a plus) is used.
Java regular expression syntax uses the backslash character as escape character, just like Java Strings do. This gives a little challenge when writing a regular expression in a Java string. Look at this regular expression example:

`String regex = "\\\\+";`

Notice that the regular expression String contains two backslashes after each other, and then a `+` . The reason is, that first the Java compiler interprets the two \\\\ characters as an escaped Java String character. After the Java compiler is done, only one \\ is left, as \\\\ means the character \\. The string thus looks like this:
`\\+`
Now the Java regular expression interpreter kicks in, and interprets the remaining backslash as an escape character. The following character `+` is now interpreted to mean an actual plus, not to have the special regular expression meaning it otherwise has. The remaining regular expression thus matches for the plus character and nothing more.


***Why `|`?***
`|` aka pipe is the representation of logical or operator. When we are splitting our complex number we want to first split it till `+` and then in next time by `i`. Thus if we want to split the string by either by `+` or by `i`.

**References : **
1. http://tutorials.jenkov.com/java-regex/index.html
2. Regex tool : https://regex101.com/

**Solution**
```
class Solution {
    public String complexNumberMultiply(String num1, String num2) {
        String[] a = num1.split("\\\\+|i");
        String[] b = num2.split("\\\\+|i");
        int ar = Integer.parseInt(a[0]), ai = Integer.parseInt(a[1]);
        int br = Integer.parseInt(b[0]), bi = Integer.parseInt(b[1]);
        return String.format("%d+%di",ar*br -ai*bi, ar*bi + ai*br);
    }
}
```