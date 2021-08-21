import React, { useState } from 'react';

export default function Home(props) {
	return (
		<div id="notesWrapper">
			<div class="notes">
				<div class="note">
					<div class="note-header">
						<span class="note-close">
							<i class="fas fa-times"></i>
						</span>
					</div>
					<div class="noteTitle">Title goes here</div>
					<div class="noteBody">Body goes here</div>
				</div>
			</div>
		</div>
	);
}
