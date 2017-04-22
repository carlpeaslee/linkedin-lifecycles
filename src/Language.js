const Language = () => {
  return {
    contains: [
      {
        className: 'inverse',
        begin: /(!)/,
        end: /([\s,])/,
        excludeEnd: true,
        contains: [
          {
            className: 'content',
            begin: /\w/,
            endsWithParent: true
          }
        ]
      },
      {
        className: 'character',
        begin: /(@)/,
        end: /([\s])/,
        excludeEnd: true,
        contains: [
          {
            className: 'content',
            begin: /\w/,
            endsWithParent: true
          }
        ]
      },
    ]
  }
}

export default Language
