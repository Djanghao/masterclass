# Beats 100%

**Author:** mohamedmostafaBig
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/5870887/](https://leetcode.com/problems/unique-email-addresses/solutions/5870887/)

---

# Intuition
The problem requires us to determine the number of unique email addresses after applying the following rules:
- Ignore everything after a '+' in the local part of the email.
- Remove any periods `.` from the local part of the email.
  
My initial thought was to process each email by splitting the local and domain parts, applying the rules, and then keeping track of the unique emails using a list.

# Approach
1. **Split the email** into the local part (before the `@`) and the domain part (after the `@`).
2. **Handle the local part** by:
   - Ignoring any portion after a `+`.
   - Removing all periods `.` from the local part.
3. **Reconstruct the email** by combining the modified local part and the original domain part.
4. Store each unique email in a list and return the total count of unique emails.

# Complexity
- **Time complexity**: $$O(n \\cdot m)$$ where `n` is the number of emails and `m` is the average length of an email. This is because we traverse each email once, split the local and domain parts, and apply string operations to process the local part.
- **Space complexity**: $$O(n)$$ for storing the unique emails in the list.

# Code

```dart
class Solution {
  int numUniqueEmails(List<String> emails) {
    // List to store unique emails
    final List<String> uniqEmails = [];
    
    // Loop through each email in the input list
    for (var email in emails) {
      // Split the email into local and domain parts
      final List<String> splitEmail = email.split('@');
      final String localName = splitEmail.first;  // Local part (before '@')
      final String domainName = splitEmail.last;  // Domain part (after '@')
      
      // Remove everything after '+' and periods '.' in the local part
      final String formattedLocalName = localName.split('+').first.split('.').join();
      
      // Reconstruct the unique email with formatted local part and original domain
      final String uniqEmail = "$formattedLocalName@$domainName";
      
      // If the unique email is not already in the list, add it
      if (!uniqEmails.contains(uniqEmail)) {
        uniqEmails.add(uniqEmail);
      }
    }
    
    // Return the count of unique emails
    return uniqEmails.length;
  }
}
```

### Explanation of the code:
1. **`split('@')`**: This splits the email into the local part (before `@`) and the domain part (after `@`).
2. **`split('+').first`**: Removes everything after the first `+` in the local part of the email.
3. **`split('.').join()`**: Removes all periods `.` in the local part.
4. **`"$formattedLocalName@$domainName"`**: Recombines the modified local part with the domain part to form the unique email.
5. **`uniqEmails.contains()`**: Checks if the email is already in the list of unique emails.

This solution handles the required transformations and returns the count of unique email addresses efficiently.