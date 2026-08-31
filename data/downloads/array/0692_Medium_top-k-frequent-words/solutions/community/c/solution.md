# CPP | C++ | priority queue | Custom Comparator and Solution Explain || O(nLogk) Solution

**Author:** SVishal19
**Votes:** 208
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/1274279/](https://leetcode.com/problems/top-k-frequent-words/solutions/1274279/)

---

```
/*
  Given a set of strings we have to print top k frequent strings.
  We have to return the array such that the string with highest frequency comes first and lower later.
  If two strings have the same frequency then they should be ordered in lexiographical order
  LeetCode Question: 692 - https://leetcode.com/problems/top-k-frequent-words/
*/

#include <bits/stdc++.h>
using namespace std;

/*
  This question is almost same as top k frequent numbers in the set. The only here is we have to maintain certain order with the strings too.
*/

#define psi pair<int, string>


/* 
  If you are not familier with how to declare a custom comparator function then you can have a read over this stackoverflow thread.
  https://stackoverflow.com/questions/16111337/declaring-a-priority-queue-in-c-with-a-custom-comparator/48587737

  Basically, you can do it in many ways out of which i feel the doing it with the class is the simpler. We can also do it with 
  lamdha function but for that we would have to make some more arrangements which declaring our pioirity queue.

  Type 1:
  auto myComparator = [](const psi &p1 const psi &p2){
    if(p1.first == p2.first) return p1.second < p2.second;

    return p1.first > p2.first;
  } 

  While declaring the priority queue
  priority_queue<psi, vector<psi>, decltype(myComparator)> anyName(myComparator)

  Type 2: If you want to declare a normal function and use it in the priority queue then it can be done in the following way
  bool myComparator(const psi &p2 const psi *p2) {
    if(p1.first == p2.first) return p1.second < p2.second;

    return p1.first > p2.first;
  }

  While declaring the priority queue you just have to give the pointer to the function
  priority_queue<psi, vector<psi>, decltype(&myComparator)> anyName(myComparator)
 */
class myComparator {
  public:
    bool operator() (const psi &p1, const psi &p2) {
      if(p1.first == p2.first) return p1.second < p2.second;
      
      return p1.first > p2.first;
    }

    /* Here the point to note is how we are writing the compare function. 
      We will return true for what type of order we want to maintain. The order will be seen from bottom to top.
      Actually there are many ways to understand but after seeing lot of ways i found the below one more understandable and easier.
      
      We will see the ordering from bottom to top. So, if i say that the order is ascending then it means that the smaller elements 
      will be at the bottom and the higher elements will be at the top. (I'm taking tree representation of the heap, 
	  if you consider array representation then the higher values will be at right and lower at the left)

      Here if you are getting the doubt that - here the higher values are coming at the top and lower values are coming at the 
      bottom then it is max heap not min heap. Then please note that the priority queue that we have declared in the getTopKFreqStrings 
      is neither min heap nor max heap. 
      The working or the order in which the elements are stored in priority queue depends on the comparator function.

      General syntax to declare the priority queue is priority_queue<data_type, container, comparator>
      the default values for container is vector<data_type> and for comparator is less<data_type>. 
      It automatically take the datatype what to give.

      In case of max heap, we declare it as => priority_queue<int> maxHeap;
      Its basically a shorthand of this => priority_queue<int, vector<int>, less<int>> maxHeap; 
      we don't write the defualt values

      and in case of min heap we declare it as => priority_queue<int, vector<int> greater<int>> minHeap;

      note the comparator in both, its because of them the priority queue becomes min heap or max heap otherwise 
      from the name itself we can see (priority) so - to which elements we should give priority depends on the comparator function. 
      So, now lets come back to question

      So, as per the question we want the decreasing order for the frequency of the strings
      and increasing order in the lexiographical way
      so that the strings with the least frequency and cannot be fitted inside k can be poped.

      So, p1.first > p2.first will return true only when the frequency of first string is more than the second
      similary, p1.second < p2.second will return true when the string s1 in p1 is lexiographically smaller then string s2 in p2.
     */
};  

vector<string> getTopKFreqStrings(vector<string> &words, int k) {
  int n = words.size();

  /* First we will find the frequency of all the strings then we will keep track of the top k frequent strings with the help of priority queue */

  unordered_map<string, int> freq;

  for(string word : words) {
    freq[word]++;
  }

  priority_queue<psi, vector<psi>, myComparator> pq;
  /* Since here we want to order the elements in a different way we will write our own custom comparator function */
  /* For defining our own comparator function we would have to declare it in the class as done above */

  for(auto it : freq) {
    pq.push({it.second, it.first});

    if(pq.size() > k) {
      pq.pop();
    }
  }

  /* Now at this point the priority queue will contain the top k frequent elements or strings of the set */

  /* Since, we know that we want to find the top k frequent strings hence we can directly declare the size of the answer vector 
  and while psing we will get the strings in ascending order of the frequency hence we will put the strings from back side 
  so that we don't have to do an extra work to reverse the vector before returning  */
  vector<string> ans(k);
  int m = k-1;

  while(pq.size() > 0) {
    ans[m--] = pq.top().second;
    pq.pop();
  }

  return ans;
}

int main() {
  int n, k;
  cin >> n >> k;

  vector<string> arr(n);
  for(int i=0; i<n; i++) {
    string s; cin >> s;
    arr[i] = s;
  }

  vector<string> topKFreq(getTopKFreqStrings(arr, k));

  for(string s : topKFreq) {
    cout << s << " ";
  }

  return 0;
}
```