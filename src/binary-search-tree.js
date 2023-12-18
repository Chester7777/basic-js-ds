const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._addNode(this.rootNode, data);
  }

  has(data) {
    return this._hasNode(this.rootNode, data);
  }

  find(data) {
    return this._findNode(this.rootNode, data);
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  min() {
    return this._minValue(this.rootNode);
  }

  max() {
    return this._maxValue(this.rootNode);
  }

  _addNode(root, data) {
    if (!root) {
      return new Node(data);
    }

    if (data < root.data) {
      root.left = this._addNode(root.left, data);
    } else if (data > root.data) {
      root.right = this._addNode(root.right, data);
    }

    return root;
  }

  _hasNode(root, data) {
    if (!root) {
      return false;
    }

    if (data === root.data) {
      return true;
    } else if (data < root.data) {
      return this._hasNode(root.left, data);
    } else {
      return this._hasNode(root.right, data);
    }
  }

  _findNode(root, data) {
    if (!root) {
      return null;
    }

    if (data === root.data) {
      return root;
    } else if (data < root.data) {
      return this._findNode(root.left, data);
    } else {
      return this._findNode(root.right, data);
    }
  }

  _removeNode(root, data) {
    if (!root) {
      return null;
    }

    if (data < root.data) {
      root.left = this._removeNode(root.left, data);
    } else if (data > root.data) {
      root.right = this._removeNode(root.right, data);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.data = this._minValue(root.right);
      root.right = this._removeNode(root.right, root.data);
    }

    return root;
  }

  _minValue(node) {
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  _maxValue(node) {
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};