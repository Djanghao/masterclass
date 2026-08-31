# Official Solution

**Link:** [https://leetcode.com/problems/accounts-merge/solution/](https://leetcode.com/problems/accounts-merge/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given a list of accounts where each account consists of a list containing the name of the person the account belongs to and some emails that belong to the person. One person is allowed to have multiple accounts, but each email can only belong to one person. Therefore, we can say two accounts must belong to the same person if the accounts have an email in common. Note that we cannot just use the user's name to determine which email addresses belong to the same user since different users may have the same name.

Our goal is, for each person, we want to identify all of the emails that belong to that person. Therefore, every time we find two accounts with an email in common, we will merge the two accounts into one.  

Whenever we must work with a set of elements (emails) that are connected (belong to the same user), we should always consider visualizing our input as a graph. In this problem, converting the input into a graph will facilitate the process of "merging" two accounts.

Emails can be represented as nodes, and an edge between nodes will signify that they belong to the same person. Since all of the emails in an account belong to the same person, we can connect all of the emails with edges. Thus, each account can be represented by a connected component. What if two accounts have an email in common? Then we can add an edge between the two connected components, effectively merging them into one connected component.  
</br>

---

### Approach 1: Depth First Search (DFS)

**Intuition**

Here, we will represent emails as nodes, and an edge will signify that two emails are connected and hence belong to the same person. This means that any two emails that are connected by a path of edges must also belong to the same person. Initially, we are given $$N$$ accounts, where each account's emails make up a connected component.  

Our first step should be to ensure that for each account, all of its nodes are connected. Suppose an account has $$K$$ emails, and we want to connect these emails. Since all emails in an account are connected, we can add an edge between every pair of emails. This will create a complete subgraph and require adding $$K \choose 2$$ edges. However, do we really need that many edges to keep track of which emails belong to the same account? No, as long as two emails are connected by a path of edges, we know they belong to the same account. So instead of creating a complete subgraph for each account, we can create an acyclic graph using only $$K - 1$$ edges. Recall that $$K - 1$$ is the minimum number of edges required to connect $$K$$ nodes. In this approach, we will connect emails in an account in a [star](https://en.wikipedia.org/wiki/Star_(graph_theory)) manner with the first email as the internal node of the star and all other emails as the leaves (as shown below).

![fig](../Figures/721/721A.png)

The beauty of connecting the emails in each account in this manner is that after connecting an email to a second account, that email will have one edge going to an email in the first account and one edge going to an email in the second account.  Thereby automatically merging the two accounts. The below slideshow depicts the merging process for four accounts that belong to two different people.

!?!../Documents/721_Accounts_Merge_A.json:960,720!?! <br>

After iterating over each account and connecting the emails as described above, we will have a one or more connected components. Each connected component will represent one person, and the nodes in the connected component are the person's emails. Now our task is to explore each connected component to find all the emails that belong to each person. Since a depth-first search is guaranteed to explore every node in a connected component, we will perform a DFS on each connected component (person) to find all of the connected emails.

To do so, we will iterate over all of the nodes and consider starting a DFS. If the node has already been visited, in an earlier DFS, we will not start a DFS.  Otherwise, perform a DFS traversal over the connected component and store all the visited emails together, as they all belong to one person. Each time we visit an email during a DFS, we will mark it as visited to ensure that we do not search the same connected component more than once. To read more about how DFS can be leveraged to find components you can refer to the first approach [here](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solution/).


**Algorithm**

1. Create an adjacency list: For each account add an edge between the first email (`accountFirstEmail`) and each of the other emails in the account.
2. Traverse over the accounts; for each account, check if the first email in the account (`accountFirstEmail`) was already visited.  If so, then do not start a new DFS. Otherwise, perform DFS with this email as the source node.
3. During each DFS, store the traversed emails in an array `mergedAccount`, also mark all these emails as visited.
4. After the DFS traversal is over, sort the emails and add the account name (`accountName`) at the start of the vector `mergedAccount`.
5. Store the vector `mergedAccount` in the answer list `mergedAccounts`.


**Implementation**


<iframe src="https://leetcode.com/playground/EAjKzRH9/shared" frameBorder="0" width="100%" height="500" name="EAjKzRH9"></iframe>


**Complexity Analysis**

Here $$N$$ is the number of accounts and $$K$$ is the maximum length of an account.

* Time complexity: $$O(NK \log{NK})$$

    In the worst case, all the emails will end up belonging to a single person. The total number of emails will be $$N*K$$, and we need to sort these emails. DFS traversal will take $$NK$$ operations as no email will be traversed more than once.

* Space complexity: $$O(NK)$$

  Building the adjacency list will take $$O(NK)$$ space. In the end, `visited` will contain all of the emails hence it will use $$O(NK)$$ space. Also, the call stack for DFS will use $$O(NK)$$ space in the worst case.

  The space complexity of the sorting algorithm depends on the implementation of each programming language. For instance, in Java, Collections.sort() dumps the specified list into an array this will take $$O(NK)$$ space then Arrays.sort() for primitives is implemented as a variant of quicksort algorithm whose space complexity is $$O(\log NK)$$. In C++ `sort()` function provided by STL is a hybrid of Quick Sort, Heap Sort, and Insertion Sort with the worst-case space complexity of $O(\log NK)$. 

<br/>

---

### Approach 2: Disjoint Set Union (DSU)

**Intuition**

As in the previous approach, the first step is to find which accounts have an email in common and merge them to form a larger connected component. Any problem that involves merging connected components (accounts) is a natural fit for the Disjoint Set Union (DSU) data structure. If you would like to learn more about the DSU data structure (also known as Union-Find), a tutorial is provided in the [Graph Explore Card](https://leetcode.com/explore/featured/card/graph/618/disjoint-set/3881/). Since most implementations of DSU use an array to record the root (representative) of each component, we will use integers to represent each component for ease of operability. Therefore, we will give each account a unique ID, and we will map all the emails in the account to the account's ID. We will use a map, `emailGroup`, to store this information. 

We chose the account index to be the identifier for all the emails of an account. We will assign the account index as the group when we get the email for the first time and when we get an email that we have already traversed, we will merge the current account and the group that we have previously stored in `emailGroup` using union operation.

After traversing over all the accounts, we will find the representative of all the emails which will inform us about their group. Emails with the same representative belong to the same person/group and hence will be stored together. Also, we can retrieve the account name for our final answer using `accountList` as we have `group` which is the index in the original accounts list.

!?!../Documents/721_Accounts_Merge_B.json:960,720!?! <br>

**Algorithm**

1. Traverse over each account, and for each account, traverse over all of its emails.  If we see an email for the first time, then set the group of the email as the index of the current account in `emailGroup` .
2. Otherwise, if the email has already been seen in another account, then we will union the current group (`i`) and the group the current email belongs to (`emailGroup[email]`).
3. After traversing over every account and merging the accounts that share a common email, we will now traverse over every email once more. Each email will be added to a map (`components`) where the key is the email's representative, and the value is a list of emails with that representative.
4. Traverse over `components`, here the keys are the group indices and the value is the list of emails belonging to this group (person). Since the emails must be "in sorted order" we will sort the list of emails for each group. Lastly, we can get the account name using the `accountList[group][0]`. In accordance with the instructions, we will insert this name at the beginning of the email list.
5. Store the list created in step 4 in our final result (`mergedAccount`). 

**Implementation**


<iframe src="https://leetcode.com/playground/cCnGvzFV/shared" frameBorder="0" width="100%" height="500" name="cCnGvzFV"></iframe>


**Complexity Analysis**

Here $$N$$ is the number of accounts and $$K$$ is the maximum length of an account.

* Time complexity: $$O(NK \log {NK})$$

   While merging we consider the size of each connected component and we always choose the representative of the larger component to be the new representative of the smaller component, also we have included the path compression so the time complexity for find/union operation is $$\alpha({N})$$ (Here, $$\alpha({N})$$ is the inverse Ackermann function that grows so slowly, that it doesn't exceed $$4$$ for all reasonable $$N$$ (approximately $$ N < 10^{600}$$).

  We find the representative of all the emails, hence it will take $$O(NK\alpha({N}))$$ time. We are also sorting the components and the worst case will be when all emails end up belonging to the same component this will cost $$O(NK(\log {NK}))$$.

  Hence the total time complexity is $$O(NK \cdot \log {NK} + NK \cdot \alpha({N}))$$.

* Space complexity: $$O(NK)$$

  List `representative`, `size` store information corresponding to each group so will take $$O(N)$$ space. All emails get stored in `emailGroup` and `component` hence space used is $$O(NK)$$.

  The space complexity of the sorting algorithm depends on the implementation of each programming language. For instance, in Java, Collections.sort() dumps the specified list into an array this will take $$O(NK)$$ space then Arrays.sort() for primitives is implemented as a variant of quicksort algorithm whose space complexity is $$O(\log NK)$$. In C++ `sort()` function provided by STL is a hybrid of Quick Sort, Heap Sort, and Insertion Sort with the worst-case space complexity of $O(\log NK)$. 
<br/>

---