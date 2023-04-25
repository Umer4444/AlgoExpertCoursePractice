function correspondingNode(tree1, tree2, node1) {
    if (!tree1 || !tree2 || !node1) return null;
    if (tree1 === node1) return tree2;

    for (let i = 0; i < tree1.children.length; i++) {
        const result = correspondingNode(tree1.children[i], tree2.children[i], node1);
        if (result) {
            return result;
        }
    }
    return null;
}

// Do not edit the line below.
exports.correspondingNode = correspondingNode;
