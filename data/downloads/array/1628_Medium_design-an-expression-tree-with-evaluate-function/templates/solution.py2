import abc 
from abc import ABCMeta, abstractmethod 
"""
This is the interface for the expression tree Node.
You should not remove it, and you can define some classes to implement it.
"""

class Node:
    __metaclass__ = ABCMeta
    # define your fields here
    @abstractmethod
    def evaluate(self):
        pass


"""    
This is the TreeBuilder class.
You can treat it as the driver code that takes the postinfix input
and returns the expression tree representing it as a Node.
"""

class TreeBuilder(object):
    def buildTree(self, postfix):
        """
        :type s: List[str]
        :rtype: int
        """

"""
Your TreeBuilder object will be instantiated and called as such:
obj = TreeBuilder();
expTree = obj.buildTree(postfix);
ans = expTree.evaluate();
"""
        