# ✔ | C++ Rust | explained ;)

**Author:** code_alone
**Votes:** 2
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/2288851/](https://leetcode.com/problems/out-of-boundary-paths/solutions/2288851/)

---

**C++ Code**

	class Solution {
	public:
		int mod = 1e9+7;
		int dp[51][51][51];
		int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
			memset(dp,-1,sizeof dp);
			return f(startRow,startColumn,m,n,maxMove);
		}
		int f(int i, int j, int m, int n, int moves){
			if(i<0 || i>=m || j<0 || j>=n)return 1; // if ball goes out of boundry we return 1 
			if(moves<1)return 0; // if ball does not go out of boundary but moves reches to zero we cant make any move hence return 0
			if(dp[i][j][moves]!=-1)return dp[i][j][moves];
			return dp[i][j][moves]=(0LL + f(i-1,j,m,n,moves-1)%mod+f(i+1,j,m,n,moves-1)%mod+
							 f(i,j-1,m,n,moves-1)%mod+f(i,j+1,m,n,moves-1)%mod)%mod;
			// explore all four direction and add all the outcomes
			// using 0ll for preventing int overflow by evaluation as long long int 
		}
	};


**Rust Code**

	const MODE:i64 = 1000000007;
	impl Solution {
		pub fn find_paths(m: i32, n: i32, max_move: i32, start_row: i32, start_column: i32) -> i32 {
			let mut dp = vec![vec![vec![-1 as i64;52];52];52];
			Self::f(start_row as usize+1, start_column as usize+1, max_move as usize, m as usize, n as usize, &mut dp) as i32
			// we are passing start_row as+1 and start_column+1 for makiing 1 base indexing cuz usize does not support value less than zero it wiil thow the error
		}
		fn f(i:usize,j:usize,moves:usize,m:usize,n:usize,dp:&mut Vec<Vec<Vec<i64>>>) -> i64{
			if i<1 || i>m || j<1 || j>n {return 1;} // usize does not go below zero thats but why we made the 1 base indexing 
			if moves < 1 {return 0;}
			if  dp[i][j][moves] != -1 {return dp[i][j][moves];}
			dp[i][j][moves] =  (Self::f(i-1,j,moves-1,m,n,dp) + Self::f(i+1,j,moves-1,m,n,dp) + Self::f(i,j-1,moves-1,m,n,dp) + Self::f(i,j+1,moves-1,m,n,dp))%MODE;
			dp[i][j][moves]
		}
	}