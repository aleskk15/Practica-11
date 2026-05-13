exports.up = (pgm) => {
  pgm.addColumn('users', {
    phone: { type: 'varchar(10)'}
  })
}

exports.down = (pgm) => {
  pgm.dropColumn('users', 'phone')
}