import React from 'react'

import './styles.css'

export default function CustomSideMenu() {
	return (
		<div class="menu-container">
			<nav>
				<ul>
					<li>
						<a href="javascript:void(0);" class="first-menu-link">Link 1 - nivel 1</a>
					</li>
					<li>
						<a href="javascript:void(0);" class="first-menu-link">Link 2</a>
						<ul class="submenu">
							<li>
								<a href="javascript:void(0);" class="menu-link">Link 1 - nivel 2</a>
								<ul class="submenu">
									<li>
										<a href="javascript:void(0);" class="menu-link">Link 1 - nivel 3</a>
									</li>
									<li>
										<a href="javascript:void(0);" class="menu-link">Link 2 - nivel 3</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);" class="menu-link">Link 2 - nivel 2</a>
								<ul class="submenu">
									<li>
										<a href="javascript:void(0);" class="menu-link">Link 1 - nivel 3</a>
									</li>
									<li>
										<a href="javascript:void(0);" class="menu-link">Link 2 - nivel 3</a>
										<ul class="submenu">
											<li>
												<a href="javascript:void(0);" class="menu-link">Link 1 - nivel 4</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="menu-link">Link 2 - nivel 4</a>
												
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	)
}
