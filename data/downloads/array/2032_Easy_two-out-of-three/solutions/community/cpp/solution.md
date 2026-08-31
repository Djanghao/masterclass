# c++  solution, map - set

**Author:** aditi36
**Votes:** 18
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/1513404/](https://leetcode.com/problems/two-out-of-three/solutions/1513404/)

---


 
 
 
    vector<int> twoOutOfThree(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3) {
        map<int, set<int>> mp;
        for(int i = 0 ; i < nums1.size() ; i++){
        mp[nums1[i]].insert(1);
    }
    for(int i = 0 ; i < nums2.size() ; i++){
        mp[nums2[i]].insert(2);
    }
    
    for(int i = 0 ; i < nums3.size() ; i++){
        mp[nums3[i]].insert(3);
    }
    vector<int> ans;
    
    for(auto it = mp.begin() ; it!=mp.end() ; it++){
        if(it->second.size()>=2){ans.push_back(it->first);}
    }
    return ans;
	}
	
	
2nd :
         
    vector<int> twoOutOfThree(vector<int>& num1, vector<int>& num2, vector<int>& num3) {
		set<int> a,b,c;
		for(auto x:num1) a.insert(x);
		for(auto x:num2) b.insert(x);
		for(auto x:num3) c.insert(x);
		map<int,int> ans;
		for(auto x : a) ans[x]++;
		for(auto x : b) ans[x]++;
		for(auto x : c) ans[x]++;
		vector<int> res;
		for(auto x : ans){
			if(x.second >1) res.push_back(x.first);
		}
		return res;

    }
