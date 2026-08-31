# [recursive] and [iterative][easy understanding]

**Author:** rajat_gupta_
**Votes:** 147
**Link:** [https://leetcode.com/problems/same-tree/solutions/826280/](https://leetcode.com/problems/same-tree/solutions/826280/)

---


	 //iterative

      class Solution {
      public:
          bool isSameTree(TreeNode* p, TreeNode* q) {
              queue<TreeNode *> queue;
              queue.push(p);
              queue.push(q);
              while (queue.size()!=0){
                  TreeNode * q2=queue.front();
                  queue.pop();
                  TreeNode * q1=queue.front();
                  queue.pop();
                  if (q1==nullptr && q2==nullptr) continue;
                  if (q1==nullptr || q2==nullptr) return false;
                  if (q1->val!=q2->val) return false;
                  queue.push(q1->left);
                  queue.push(q2->left);
                  queue.push(q1->right);
                  queue.push(q2->right);
              }
              return true;
          }
      };
	  
    //recursive

      class Solution {
      public:
          bool isSameTree(TreeNode* p, TreeNode* q) {
              if(p==nullptr && q==nullptr) return true;
              if(p==nullptr || q==nullptr) return false;
              if(q->val!=p->val) return false;
              return isSameTree(p->left,q->left) && isSameTree(p->right,q->right);
          }
      };
	  
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
	