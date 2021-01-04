import React from 'react'

import './styles.css'

export default function CustomSideMenu() {
	return (
		<div class="menu-container">
			<nav>
				<ul>
					<li>
						<a href="javascript:void(0);" class="first-menu-link">
							<div class="menu-link-content">
								<i class="fas fa-users menu-link-icon"></i>
								<span class="menu-link-text">Gestão de Pessoas</span>
							</div>
						</a>
						<ul class="submenu">
							<li>
								<a href="javascript:void(0);" class="menu-link">
									<div class="menu-link-content">
										<i class="fas fa-clipboard menu-link-icon"></i>
										<span class="menu-link-text">Candidato</span>
										<i class="fas fa-chevron-right arrow-right"></i>
									</div>
								</a>
								<ul class="submenu">
									<li>
										<a href="javascript:void(0);" class="menu-link">
											<div class="menu-link-content">
												<i class="fas fa-search menu-link-icon"></i>
												<span class="menu-link-text">Consultar</span>
											</div>
										</a>
									</li>
									<li>
										<a href="javascript:void(0);" class="menu-link">
											<div class="menu-link-content">
												<i class="fas fa-plus-circle menu-link-icon"></i>
												<span class="menu-link-text">Cadastrar</span>
											</div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);" class="menu-link">
									<div class="menu-link-content">
										<i class="fas fa-user-tie menu-link-icon"></i>
										<span class="menu-link-text">Funcionário</span>
										<i class="fas fa-chevron-right arrow-right"></i>
									</div>
								</a>
								<ul class="submenu">
									<li>
										<a href="javascript:void(0);" class="menu-link">
											<div class="menu-link-content">
												<span class="menu-link-text">Link 1 - nivel 3</span>
											</div>
										</a>
									</li>
									<li>
										<a href="javascript:void(0);" class="menu-link">
											<div class="menu-link-content">
												<span class="menu-link-text">Link 2 - nivel 3</span>
											</div>
										</a>
										<ul class="submenu">
											<li>
												<a href="javascript:void(0);" class="menu-link">
													<div class="menu-link-content">
														<span class="menu-link-text">Link 1 - nivel 4</span>
													</div>
												</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="menu-link">
													<div class="menu-link-content">
														<span class="menu-link-text">Link 2 - nivel 4</span>
													</div>
												</a>
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
