# [C++] Concise Solution

**Author:** KasraGhodsi
**Votes:** 167
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/317207/](https://leetcode.com/problems/unique-email-addresses/solutions/317207/)

---

For each email address in `emails`, clean up the local name, append the domain name, and add the cleaned up email to a set.

Return the size of the set.
 
	int numUniqueEmails(vector<string>& emails) {
        unordered_set<string> st;
        for(string &email : emails) {
            string cleanEmail;
            for(char c : email) {
                if(c == '+' || c == '@') break;
                if(c == '.') continue;
                cleanEmail += c;
            }
            cleanEmail += email.substr(email.find('@'));
            st.insert(cleanEmail);
        }
        return st.size();
    }