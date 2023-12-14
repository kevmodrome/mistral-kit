<div class="loading-indicator">
	<span class="loading-text">Loading...</span>
	<div class="spinner">
		<div class="double-bounce1"></div>
		<div class="double-bounce2"></div>
	</div>
</div>

<style>
	.loading-indicator {
		display: flex;
		align-items: center;
	}

	.spinner {
		width: 40px;
		height: 40px;
		margin-left: 10px;
		position: relative;
	}

	.double-bounce1,
	.double-bounce2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #333;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		animation: sk-bounce 2s infinite ease-in-out;
	}

	.double-bounce1 {
		animation-delay: -1s;
	}

	.double-bounce2 {
		animation-delay: -0.5s;
	}

	@keyframes sk-bounce {
		0%,
		100% {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
	}
</style>
