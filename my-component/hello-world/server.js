module.exports.data = (context, callback) => {
    const { name } = context.params;
    callback(null, { name: name || 'World' });
};
