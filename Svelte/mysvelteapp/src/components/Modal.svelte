<!-- Modal.svelte -->
<!-- Modal.svelte -->

<div class="modal-overlay">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
  
  <style>
        
    .modal-overlay {
        position: fixed;
        z-index: 99999999999;
        inset: 0;
        background-color: #ffffff;
        min-height: 100vh;
        transition: all 300mx ease-in-out;
        background-color: rgba(32,32,33,0.3);
        display: grid;
        place-content: center;
    }
  
    .modal-content {
        width: 1200px;
        background-color: rgb(197, 250, 197);
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 15px;
    
    }

 
  </style>
  

    



   