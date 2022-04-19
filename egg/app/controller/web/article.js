'use strict'

const baseController = require('../baseController')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class WebArticleController extends baseController {

    /**
     * 添加数据
     * @returns {Promise<void>}
     */
    async create() {
        const { ctx } = this
        const result = await ctx.model.Web.Article.create({ ...ctx.request.body })
        this.result({ data: result })
    }

    /**
     * 删除数据
     * @returns {Promise<void>}
     */
    async delete() {
        const { ctx } = this
        const { id } = ctx.request.body
        const result = await ctx.model.Web.Article.destroy({
            where: { id },
        })
        this.result({ data: result })
    }

    /**
     * 删除多个路由
     * @returns {Promise<void>}
     */
    async deletes() {
        const { ctx } = this
        const { ids } = ctx.request.body
        const result = await ctx.model.Web.Article.destroy({
            where: {
                id: [...ids],
            },
        })
        this.result({ data: result })
    }


    /**
     * 查找
     * @returns {Promise<void>}
     */
    async find() {
        const { ctx } = this
        const { id } = ctx.request.body
        const result = await ctx.model.Web.Article.findOne({
            where: { id },
            include: [{ model: ctx.model.Web.Channel, as: 'channel' },{ model: ctx.model.Member, as: 'member' }],
        })
        this.result({ data: result })
    }

    /**
     * 获取所有数据，可以带条件查询
     * @returns {Promise<void>}
     */
    async all() {
        const { ctx } = this
        const { ks } = ctx.request.body
        const where = {}
        if (ks) {
            where.name = { [Op.like]: `%${ks}%` } // 模糊查詢 https://www.sequelize.com.cn/core-concepts/model-querying-basics
        }
        const result = await ctx.model.Web.Article.findAll({
            where: { ...where },
        })
        this.result({ data: result })
    }

    /**
     * 编辑数据
     * @returns {Promise<void>}
     */
    async update() {
        const { ctx } = this
        const body = ctx.request.body
        const result = await ctx.model.Web.Article.update({
            ...body,
        }, {
            where: {
                id: body.id,
            },
        })
        this.result({ data: result })
    }
}

module.exports = WebArticleController