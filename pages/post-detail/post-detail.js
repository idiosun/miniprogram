// pages/post-detail/post-detil.js
import { postList } from "../../data/data.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        _pid: null,
        collected: false,
        _postCollected: {}
    },
    onCollect(event) {
        const postCollected = this.data._postCollected;
        postCollected[this.data._pid] = !this.data.collected;
        this.setData({
            collected: !this.data.collected,
        })
        wx.setStorageSync('posts-collected', postCollected);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        const detail = postList[options.pid];
        this.data._pid = options.pid;
        const postsCollected = wx.getStorageSync('posts-collected')
        this.data._postCollected = postsCollected;
        let collected = postsCollected[this.data._pid]
        if (collected === undefined)
            collected = false;
        this.setData({
            collected
        })
        console.log(postsCollected)
        console.log(detail);
        this.setData(detail);
        console.log(this.data)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})