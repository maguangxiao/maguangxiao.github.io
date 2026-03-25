<template>
    <div class="input-demo">
        <textarea
            ref="textareaRef"
            v-model="inputText"
            class="demo-textarea"
            placeholder="请输入内容..."
            @blur="handleBlur"
        ></textarea>

        <div class="bottom-bar">
            <span class="char-count">{{ charCount }} / {{ maxChars }}</span>
            <button class="complete-btn" @click="handleComplete">完成</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputDemo',
    data() {
        return {
            inputText: '',
            maxChars: 500,
            isFocused: false,
        };
    },
    computed: {
        charCount() {
            return this.inputText.length;
        },
    },
    mounted() {
        this.$nextTick(() => {
            // 多种方式尝试聚焦
            this.focusTextarea();
            this.startFocusWatch();
        });
    },
    beforeDestroy() {
        this.stopFocusWatch();
    },
    methods: {
        // 多种聚焦方式尝试
        focusTextarea() {
            const textarea = this.$refs.textareaRef;
            if (!textarea) return;

            // 方法1: 直接 focus
            textarea.focus();

            // 方法2: 尝试触发 click 事件触发聚焦
            // textarea.click();

            // // 方法3: 延迟聚焦
            // setTimeout(() => {
            //     textarea.focus();
            // }, 100);

            // // 方法4: 使用 Selection API
            // setTimeout(() => {
            //     const len = textarea.value.length;
            //     if (len > 0) {
            //         textarea.setSelectionRange(len, len);
            //     }
            //     textarea.focus();
            // }, 200);

            // // 方法5: 递归尝试（最多5次）
            // this.retryFocus(5);
        },
        retryFocus(remaining) {
            if (remaining <= 0) return;
            const textarea = this.$refs.textareaRef;
            if (textarea && document.activeElement !== textarea) {
                textarea.focus();
                setTimeout(() => {
                    this.retryFocus(remaining - 1);
                }, 200);
            }
        },
        handleBlur(e) {
            console.log('失焦', e);
            // 失焦时立即重新聚焦
            this.$nextTick(() => {
                this.focusTextarea();
            });
        },
        handleComplete() {
            // 提交逻辑
            console.log('提交内容:', this.inputText);
            this.focusTextarea();
        },
        startFocusWatch() {
            this.focusTimer = setInterval(() => {
                if (document.activeElement !== this.$refs.textareaRef) {
                    this.$refs.textareaRef.focus();
                }
            }, 100);
        },
        stopFocusWatch() {
            if (this.focusTimer) {
                clearInterval(this.focusTimer);
                this.focusTimer = null;
            }
        },
    },
};
</script>

<style scoped>
.input-demo {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    font-size: 48px;
    height: 100vh;
}

.demo-textarea {
    flex: 1;
    width: 100%;
    padding: 16px;
    border: none;
    outline: none;
    resize: none;
    font-size: 48px;
    line-height: 1.5;
    box-sizing: border-box;
    background-color: #fff;
}

.bottom-bar {
    position: fixed;
    bottom: 300px;
    left: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    box-sizing: border-box;
}

.char-count {
    font-size: 48px;
    color: #999;
}

.complete-btn {
    padding: 8px 24px;
    background-color: #007aff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 48px;
    cursor: pointer;
}

.complete-btn:active {
    background-color: #0056b3;
}
</style>
