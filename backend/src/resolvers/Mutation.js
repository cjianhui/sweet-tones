const mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO: check if user logged in

        const item = ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);

        return item;
    },

    updateItem(parent, args, ctx, info) {
        // first take a copy of the updates
        const updates = { ...args };
        // remove ID from updates
        delete updates.id;
        // run the update method
        return ctx.db.mutation.updateItem(
            {
                data: updates,
                where: {
                    id: args.id
                },
            },
            info
        )
    }
};

module.exports = mutations;
