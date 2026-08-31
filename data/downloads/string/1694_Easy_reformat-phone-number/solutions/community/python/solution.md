# 1-liner Python / Java / C++

**Author:** StefanPochmann
**Votes:** 79
**Link:** [https://leetcode.com/problems/reformat-phone-number/solutions/979806/](https://leetcode.com/problems/reformat-phone-number/solutions/979806/)

---

One regex to remove non-digits, another to insert dashes.

Python:
```
def reformatNumber(self, number: str) -> str:
    return re.sub('(...?(?=..))', r'\\1-', re.sub('\\D', '', number))
```

Java:
```
public String reformatNumber(String number) {
    return number.replaceAll("\\\\D", "").replaceAll("...?(?=..)", "$0-");
}
```

C++:
```
string reformatNumber(string number) {
    return regex_replace(regex_replace(number, regex("\\\\D"), ""), regex("...?(?=..)"), "$0-");
}
```