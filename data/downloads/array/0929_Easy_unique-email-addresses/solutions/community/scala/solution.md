# A collection of 1-line solutions in different languages

**Author:** minato_yukina
**Votes:** 5
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/1489706/](https://leetcode.com/problems/unique-email-addresses/solutions/1489706/)

---

**C#**
```
public class Solution {
    public int NumUniqueEmails(string[] emails) =>
        emails.Select(email => email.Substring(0, System.Text.RegularExpressions.Regex.Match(email, "[+@]").Index).Replace(".", "") + email.Substring(email.IndexOf('@'))).Distinct().Count();
}
```
**JavaScript**
```
/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
    return new Set(emails.map(email => email.substr(0, email.search(/[+@]/)).replaceAll('.', '') + email.substr(email.search('@')))).size
}
```
**Python**
```
class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        return len(set(map(lambda email: email[:re.search(r'[+@]', email).start()].replace('.', '') + email[email.find('@'):], emails)))
```
**Ruby**
```
# @param {String[]} emails
# @return {Integer}
def num_unique_emails(emails)
    emails.map{|email| email[0, email.index(/[+@]/)].gsub('.', '') + email[email.index('@')..]}.uniq.size
end
```
**Scala**
```
object Solution {
    def numUniqueEmails(emails: Array[String]): Int =
        emails.map(email => email.substring(0, "[+@]".r.findFirstMatchIn(email).map(_.start).get).replace(".", "") + email.substring(email.indexOf("@"))).distinct.length
}
```
**TypeScript**
```
function numUniqueEmails(emails: string[]): number {
    return new Set(emails.map(email => email.substr(0, email.search(/[+@]/)).replace(/\\.+/g, '') + email.substr(email.search('@')))).size
}
```