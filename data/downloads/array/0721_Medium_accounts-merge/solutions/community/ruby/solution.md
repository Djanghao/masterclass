# Union Find | Ruby

**Author:** piyushsawaria
**Votes:** 5
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/1041575/](https://leetcode.com/problems/accounts-merge/solutions/1041575/)

---

```
def accounts_merge(accounts)
  @parents = {}
  @email_to_name = {}
  
  accounts.each do |name, *emails|
    emails.each do |email|
      @email_to_name[email] = name
      @parents[email] = email unless @parents[email]
      union(emails[0], email)
    end
  end
  # p @parents
  # p @email_to_name
  @emails = {}
  
  @parents.keys.each do |email|
    parent = find(email)
    @emails[parent] = @emails[parent] ? @emails[parent].push(email) : [email]
  end
  
  # p @emails
  @emails.map do |p_email, emails|
    [@email_to_name[p_email], *emails.sort]
  end
end

def union(u, v)
  p1 = find(u)
  p2 = find(v)
  @parents[p2] = p1
end

def find(x)
  return x if @parents[x] == x
  @parents[x] = find(@parents[x])
  @parents[x]
end