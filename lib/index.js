const { parseScript: parse } = require('meriyah')

function processNode (node) {
  if (!node) return null

  switch (node.type) {
    case "ArrayExpression": {}
    case "ArrayPattern": {}
    case "ArrowFunctionExpression": {}
    case "AssignmentExpression": {}
    case "AssignmentPattern": {}
    case "AwaitExpression": {}
    case "BigIntLiteral": {}
    case "BinaryExpression": {}
    case "BlockStatement": {}
    case "BreakStatement": {}
    case "CallExpression": {}
    case "OptionalExpression": {}
    case "OptionalChain": {}
    case "ImportExpression": {}
    case "CatchClause": {}
    case "ClassBody": {}
    case "ClassDeclaration": {}
    case "ClassExpression": {}
    case "ConditionalExpression": {}
    case "ContinueStatement": {}
    case "DebuggerStatement": {}
    case "Decorator": {}
    case "DoWhileStatement": {}
    case "EmptyStatement": {}
    case "ExportAllDeclaration": {}
    case "ExportDefaultDeclaration": {}
    case "ExportNamespaceSpecifier": {}
    case "ExportNamedDeclaration": {}
    case "ExportSpecifier": {}
    case "ExpressionStatement": {}
    case "FieldDefinition": {}
    case "ForInStatement": {}
    case "ForOfStatement": {}
    case "ForStatement": {}
    case "FunctionDeclaration": {}
    case "FunctionExpression": {}
    case "Identifier": {}
    case "IfStatement": {}
    case "Import": {}
    case "ImportDeclaration": {}
    case "ImportDefaultSpecifier": {}
    case "ImportNamespaceSpecifier": {}
    case "ImportSpecifier": {}
    case "JSXNamespacedName": {}
    case "JSXAttribute": {}
    case "JSXClosingElement": {}
    case "JSXClosingFragment": {}
    case "JSXElement": {}
    case "JSXEmptyExpression": {}
    case "JSXExpressionContainer": {}
    case "JSXFragment": {}
    case "JSXIdentifier": {}
    case "JSXOpeningElement": {}
    case "JSXOpeningFragment": {}
    case "JSXSpreadAttribute": {}
    case "JSXSpreadChild": {}
    case "JSXMemberExpression": {}
    case "JSXText": {}
    case "LabeledStatement": {}
    case "Literal": {}
    case "LogicalExpression": {}
    case "CoalesceExpression": {}
    case "MemberExpression": {}
    case "MetaProperty": {}
    case "MethodDefinition": {}
    case "NewExpression": {}
    case "ObjectExpression": {}
    case "ObjectPattern": {}
    case "ParenthesizedExpression": {}
    case "PrivateName": {}
    case "Program": {}
    case "Property": {}
    case "RestElement": {}
    case "ReturnStatement": {}
    case "SequenceExpression": {}
    case "SpreadElement": {}
    case "Super": {}
    case "SwitchCase": {}
    case "SwitchStatement": {}
    case "TaggedTemplateExpression": {}
    case "TemplateElement": {}
    case "TemplateLiteral": {}
    case "ThisExpression": {}
    case "ThrowStatement": {}
    case "TryStatement": {}
    case "UpdateExpression": {}
    case "UnaryExpression": {}
    case "VariableDeclaration": {}
    case "VariableDeclarator": {}
    case "WhileStatement": {}
    case "WithStatement": {}
    case "YieldExpression": {}
    default: {
      return {}
    }
  }
}

module.exports = function (code) {
  return processNode(
    parse(code, {
      loc: false,
      next: true,
      module: false,
      impliedStrict: true,
      directives: false
    })
  )
}
