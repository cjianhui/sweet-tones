const mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO: check if user logged in

        const item = ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);

        return item;
    }
};

module.exports = mutations;
