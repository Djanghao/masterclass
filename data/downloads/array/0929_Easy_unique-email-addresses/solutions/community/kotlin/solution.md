# Kotlin

**Author:** victorizzie
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/958851/](https://leetcode.com/problems/unique-email-addresses/solutions/958851/)

---

```
fun numUniqueEmails(emails: Array<String>): Int = emails.map {
        val splitEmail = it.split("@")
        val local = splitEmail[0].replaceAfter("+","").replace("+","").replace(".","")
        "$local@${splitEmail[1]}"
    }.distinct().size
```