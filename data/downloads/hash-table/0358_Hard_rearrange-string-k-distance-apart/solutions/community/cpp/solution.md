# C++ unordered_map priority_queue solution using cache

**Author:** sxycwzwzq
**Votes:** 60
**Link:** [https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/83207/](https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/83207/)

---

key point: using cache during processing heap data.

new version:

    class Solution {
    public:
        string rearrangeString(string str, int k) {
            if(k == 0) return str;
            int length = (int)str.size(); 
            
            string res;
            unordered_map<char, int> dict;
            priority_queue<pair<int, char>> pq;
            
            for(char ch : str) dict[ch]++;
            for(auto it = dict.begin(); it != dict.end(); it++){
                pq.push(make_pair(it->second, it->first));
            }
            
            while(!pq.empty()){
                vector<pair<int, char>> cache; //store used char during one while loop
                int count = min(k, length); //count: how many steps in a while loop
                for(int i = 0; i < count; i++){
                    if(pq.empty()) return "";
                    auto tmp = pq.top();
                    pq.pop();
                    res.push_back(tmp.second);
                    if(--tmp.first > 0) cache.push_back(tmp);
                    length--;
                }
                for(auto p : cache) pq.push(p);
            }
            return res;
        }
    };

old version:

    class Solution {
        struct mycompare{
            bool operator()(pair<int, char>& p1, pair<int, char>& p2){
                if(p1.first == p2.first) return p1.second > p2.second;
                return p1.first < p2.first;
            }
        };
    public:
        string rearrangeString(string str, int k) {
            if(k == 0) return str;
            unordered_map<char, int> dict;
            for(char ch : str) dict[ch]++;
            int left = (int)str.size();
            priority_queue<pair<int, char>, vector<pair<int, char>>, mycompare > pq;
            for(auto it = dict.begin(); it != dict.end(); it++){
                pq.push(make_pair(it->second, it->first));
            }
            string res;
            
            while(!pq.empty()){
                vector<pair<int, char>> cache;
                int count = min(k, left);
                for(int i = 0; i < count; i++){
                    if(pq.empty()) return "";
                    auto tmp = pq.top();
                    pq.pop();
                    res.push_back(tmp.second);
                    if(--tmp.first > 0) cache.push_back(tmp);
                    left--;
                }
                for(auto p : cache){
                    pq.push(p);
                }
            }
            return res;
        }
    };