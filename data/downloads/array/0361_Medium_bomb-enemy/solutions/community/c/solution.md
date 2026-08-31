# Simple sweep | emulate the game | C++

**Author:** f1re
**Votes:** 1
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/1165436/](https://leetcode.com/problems/bomb-enemy/solutions/1165436/)

---

```
vector<vector<int>> kills;
int m,n;

void processRow(vector<char> &row, int r){ // sweep count the enemy then add that count to continous non wall cells.
	int i, cnt = 0, k=0;

	for(i=0; i<n; ++i){
		if(row[i] == 'W'){
			while(k<i) kills[r][k++] += cnt;
			++k;
			cnt = 0;
		}
		else if(row[i] == 'E'){
			++cnt;
		}
	}
	while(k<n) kills[r][k++] += cnt;
}

void processCol(vector<vector<char>>& A, int c){
	int i, cnt = 0, k=0;

	for(i=0; i<m; ++i){
		if(A[i][c] == 'W'){
			while(k<i) kills[k++][c] += cnt;
			++k;
			cnt = 0;
		}
		else if(A[i][c] == 'E'){
			++cnt;
		}
	}
	while(k<m) kills[k++][c] += cnt;
}

int maxKilledEnemies(vector<vector<char>>& A) {
	m = A.size(), n = A[0].size();
	kills.resize(m, vector<int>(n,0));

	for(int r=0; r<m; ++r){
		processRow(A[r], r);
	}
	for(int c=0; c<n; ++c){
		processCol(A, c);
	}

	int res = 0;
	for(int r=0; r<m; ++r){
		for(int c=0; c<n; ++c){
			if(A[r][c] == '0') res = max(res, kills[r][c]);
		}
	}
	return res;
}
```